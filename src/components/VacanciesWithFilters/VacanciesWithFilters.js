import React, { Component } from 'react';
import { Link } from 'gatsby';
import { PageHeader } from '../components/PageHeader/PageHeader';

import './VacanciesWithFilters.css';

class VacanciesWithFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderData: props.RenderData,
      cityActiveValue: props.RenderData.Cities[0],
      categoryActiveValue: props.RenderData.Categories[0],
      vacancies: props.RenderData.Vacancies,
      categories: props.RenderData.Categories,
      cities: props.RenderData.Cities,
    };
    console.log(this.state);
  }

  handleCityChange = (event) => {
    console.log('select', { target: event.target.value });
    const newCityValue = event.target.value;
    let filteredVacancies = this.props.RenderData.Vacancies;
    if (newCityValue !== this.props.RenderData.Cities[0]) {
      filteredVacancies = filteredVacancies.filter(
        (item) => item.city == newCityValue,
      );
    }
    const filteredCategories = filteredVacancies
      .map((item) => item.category)
      .filter((value, index, self) => self.indexOf(value) === index);
    filteredCategories.unshift(this.props.RenderData.Categories[0]);
    console.log('after city change categories are:', filteredCategories);

    this.setState({
      cityActiveValue: newCityValue,
      vacancies: filteredVacancies,
      categories: filteredCategories,
      categoryActiveValue: this.props.RenderData.Categories[0],
    });
  };

  handleCategoryChange = (event) => {
    console.log('href', { target: event.target.innerText });
    const newCategoryValue = event.target.innerText;
    let filteredVacancies = this.props.RenderData.Vacancies; //.filter(item=>item.category == newCategoryValue);
    if (newCategoryValue != this.props.RenderData.Categories[0]) {
      //  !== 'Все'
      filteredVacancies = filteredVacancies.filter(
        (item) => item.category == newCategoryValue,
      );
    }
    if (this.state.cityActiveValue !== this.props.RenderData.Cities[0]) {
      //  !== 'Все'
      filteredVacancies = filteredVacancies.filter(
        (item) => item.city == this.state.cityActiveValue,
      );
    }
    let filteredCities = filteredVacancies
      .map((item) => item.city)
      .filter((value, index, self) => self.indexOf(value) === index);
    filteredCities.unshift(this.props.RenderData.Cities[0]);
    console.log('after cat change cities are:', filteredCities);
    console.log('after cat change vac are:', filteredVacancies);

    this.setState({
      categoryActiveValue: newCategoryValue,
      vacancies: filteredVacancies,
    });
  };

  render() {
    console.log('this.state.renderData', this.state.renderData);
    console.log('this.props.RenderData', this.props.RenderData);

    const cities = this.state.renderData.Cities.map((city) => (
      <option>{city}</option>
    ));
    const filters = this.state.categories.map((cat) => {
      const style =
        cat == this.state.categoryActiveValue
          ? 'category_filter active'
          : 'category_filter';
      return (
        <button className={style} href="#" onClick={this.handleCategoryChange}>
          {cat}
        </button>
      );
    });
    const boxes = this.state.vacancies.map((node) => (
      <Link key={node.id} to={node.slug} className="vacancies__box">
        <div key={node.id} className="vacancies__box_inner">
          <div className="vacancies__box__title">{node.title}</div>
          <div className="vacancies__box__tags">
            {node.tags
              .split(';')
              .filter((tag) => tag.length > 0)
              .map((tag) => (
                <span key={tag}>
                  {tag} <span className="tag-delimeter">&sdot;</span>{' '}
                </span>
              ))}
          </div>
        </div>
      </Link>
    ));
    return (
      <div className="vacancies__wrapper">
        <PageHeader className="ceo__title">
          <FormattedMessage id="jobs_vacancies_header" />
        </PageHeader>
        <select
          value={this.state.citySelect}
          onChange={this.handleCityChange}
          className="vacancies__city"
        >
          {cities}
        </select>
        <div className="vacancies__filter">{filters}</div>
        <div className="vacancies__boxes">{boxes}</div>
      </div>
    );
    return <div />;
  }
}
export default VacanciesWithFilters;
