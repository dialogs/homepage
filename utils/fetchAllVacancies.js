const axios = require('axios');
const cyrillicToTranslit = require('cyrillic-to-translit-js');

const BASE_URL = 'https://api.hh.ru/';
const COMPANY_ID = 2487053;
const ITEMS_PER_PAGE = 100;
const LOCATIONS = {
  all: 'all',
  '1': 'msk',
  '4': 'nsk',
  '2': 'spb',
};
const CATEGORIES = {
  all: 'all',
  '1': 'it',
  '11': 'art',
  '3': 'marketing',
};

function sortVacanciesByPublishDate(a, b) {
  if (a.publishedAt.getTime() < b.publishedAt.getTime()) {
    return -1;
  }

  if (a.publishedAt.getTime() > b.publishedAt.getTime()) {
    return 1;
  }

  return 0;
}

function getSlug(string) {
  return encodeURIComponent(
    cyrillicToTranslit()
      .transform(string, '-')
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\u0100-\uFFFF\w\-]/g, '-')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, ''),
  );
}

function getLocation(id) {
  if (!id) {
    return LOCATIONS['all'];
  }

  return LOCATIONS[id];
}

function getCategory(id) {
  if (!id) {
    return CATEGORIES['all'];
  }

  return CATEGORIES[id];
}

function normalizeVacancyData({ data }) {
  return {
    id: data.id,
    title: data.name,
    slug: getSlug(data.name),
    description: data.description,
    location: getLocation(data.area.id),
    salary: data.salary,
    experience: data.experience.name,
    schedule: data.schedule.name,
    employment: data.employment.name,
    skills: data.key_skills,
    specialization: getCategory(data.specializations[0].profarea_id),
    publishedAt: new Date(data.published_at),
  };
}

async function fetchVacancy(vacancyId) {
  return await axios({
    method: 'get',
    baseURL: BASE_URL,
    url: `/vacancies/${vacancyId}`,
  }).then(normalizeVacancyData);
}

async function fetchVacanciesIds() {
  const { status, data } = await axios({
    method: 'get',
    baseURL: BASE_URL,
    url: `/vacancies`,
    params: {
      employer_id: COMPANY_ID,
      per_page: ITEMS_PER_PAGE,
    },
  });

  if (status !== 200) {
    return null;
  }

  return data;
}

function getVacancyIds(vacancies) {
  return vacancies.items.map((vacancy) => {
    return {
      id: vacancy.id,
    };
  });
}

async function fetchAllVacancies() {
  const allVacanciesIds = await fetchVacanciesIds().then(getVacancyIds);

  if (!allVacanciesIds) {
    return {
      error: 'No vacancies fetched',
    };
  }

  const vacanciesData = await axios
    .all(allVacanciesIds.map((vacancy) => fetchVacancy(vacancy.id)))
    .then(axios.spread((...vacancies) => vacancies));

  return {
    data: vacanciesData.sort(sortVacanciesByPublishDate),
  };
}

exports.fetchAllVacancies = fetchAllVacancies;
