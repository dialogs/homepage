import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Section } from '../Section/Section';
import { PageHeader } from '../PageHeader/PageHeader';
import ApplyForJobForm from '../ApplyForJobForm';
import './ApplyForJob.css';

export function ApplyForJob() {
  return (
    <Section className="apply">
      <div id="form">
        <PageHeader>
          <FormattedMessage id="job_apply_header" />
        </PageHeader>
        <span>
          <FormattedMessage id="job_apply_message" />
        </span>

        <ApplyForJobForm className="apply__form" />
      </div>
    </Section>
  );
}
