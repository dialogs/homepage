import React, { useState } from 'react';
import { Container } from '../components/Container/Container';
import { Page } from '../components/Page/Page';
import { Button } from '../components/Button/Button';
import { PageHeading } from '../components/PageHeading/PageHeading';
import { Heading } from '../components/Heading/Heading';
import { OfferForm } from '../components/OfferForm/OfferForm';
import { Section } from '../components/Section/Section';
import { Input } from '../components/Input/Input';
import { Select } from '../components/Select/Select';

const selectOptions = [
  {
    label: '1-100',
    value: '1-100',
  },
  {
    label: '101-500',
    value: '101-500',
  },
  {
    label: '501-1000',
    value: '501-1000',
  },
  {
    label: '1000+',
    value: '1000+',
  },
];

export default () => {
  const [usersCount, setUsersCount] = useState('1-100');
  const [inputValue, setInputValue] = useState('');

  return (
    <Page>
      <Container>
        <PageHeading>Website components test ground</PageHeading>
        <Section>
          <Heading>Buttons</Heading>
          <Heading level="4">Default button</Heading>
          <Button>Button</Button>{' '}
          <Button state="pending">Pending button</Button>{' '}
          <Button state="success">Success button</Button>{' '}
          <Button state="error">Error button</Button>
          <br />
          <br />
          <Button disabled>Default button</Button>{' '}
          <Button disabled state="pending">
            Pending button
          </Button>{' '}
          <Button disabled state="success">
            Success button
          </Button>{' '}
          <Button disabled state="error">
            Error button
          </Button>
          <Heading level="4">Pale button</Heading>
          <Button theme="pale">Pale</Button>{' '}
          <Button theme="pale" state="pending">
            Pending button
          </Button>{' '}
          <Button theme="pale" state="success">
            Success button
          </Button>{' '}
          <Button theme="pale" state="error">
            Error button
          </Button>
          <br />
          <br />
          <Button disabled theme="pale">
            Default button
          </Button>{' '}
          <Button disabled theme="pale" state="pending">
            Pending button
          </Button>{' '}
          <Button disabled theme="pale" state="success">
            Success button
          </Button>{' '}
          <Button disabled theme="pale" state="error">
            Error button
          </Button>
          <Heading level="4">Outline button</Heading>
          <Button theme="outline">Outline</Button>{' '}
          <Button theme="outline" state="pending">
            Pending button
          </Button>{' '}
          <Button theme="outline" state="success">
            Success button
          </Button>{' '}
          <Button theme="outline" state="error">
            Error button
          </Button>
          <br />
          <br />
          <Button disabled theme="outline">
            Default button
          </Button>{' '}
          <Button disabled theme="outline" state="pending">
            Pending button
          </Button>{' '}
          <Button disabled theme="outline" state="success">
            Success button
          </Button>{' '}
          <Button disabled theme="outline" state="error">
            Error button
          </Button>
        </Section>
        <Section>
          <Heading>Input</Heading>
          <Input
            value={inputValue}
            name="users"
            label="Input"
            onChange={(value) => setInputValue(value)}
            required
          />
          <Input
            value={inputValue}
            name="users"
            label="Input"
            onChange={(value) => setInputValue(value)}
            required
            state="error"
            error="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
          />
        </Section>
        <Section>
          <Heading>Select</Heading>
          <Select
            options={selectOptions}
            value={usersCount}
            name="users"
            onChange={(value) => setUsersCount(value)}
            label="Select"
            required
          />
          <Select
            options={selectOptions}
            value={usersCount}
            name="users"
            onChange={(value) => setUsersCount(value)}
            label="Success select"
            state="success"
            required
          />
          <Select
            options={selectOptions}
            value={usersCount}
            name="users"
            onChange={(value) => setUsersCount(value)}
            label="Error elect"
            state="error"
            required
          />
        </Section>
        <hr />
        <Section>
          <Heading>OfferForm</Heading>
          <OfferForm onSubmit={console.log} />
        </Section>
      </Container>
    </Page>
  );
};
