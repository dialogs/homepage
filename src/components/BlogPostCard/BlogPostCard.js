import React from 'react';
import { Link } from 'gatsby';
import removeMarkdown from 'remove-markdown';
import { styled } from 'astroturf';
import { Tag } from '../Tag/Tag';
import { Text } from '../Text/Text';
import { removeServiceTags } from '../../utils/removeServiceTags';

const BlogPostCardContainer = styled.div`
  @import '../../styles/variables.css';

  margin-top: 30px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 60px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    background: var(--color-primary);
    z-index: -1;
    opacity: 0;
    transition: all 300ms ease-out;
    transform: translateZ(0);
    box-shadow: 0px 4px 24px color-mod(#000 alpha(5%));
  }

  &:hover {
    &:before {
      opacity: 1;
      top: 80px;
      bottom: 0;
    }
  }
`;

const BlogPostCardImage = styled.img`
  width: 100%;
`;

const BlogPostCardDate = styled.div`
  @import '../../styles/variables.css';

  margin-top: 20px;
  font-size: 14px;
  line-height: 18px;
  color: var(--text-color-main-03);

  @media (--tablet-landscape-viewport) {
    margin-top: 30px;
  }
`;

const BlogPostCardTitle = styled(Text).attrs({ bold: true, size: 'large' })``;

const BlogPostCardExcerpt = styled(Text).attrs({ bold: true })`
  padding-top: 0;
`;

const BlogPostCardLink = styled(Link)`
  display: inline-block;
  height: 100%;
`;

const BlogPostCardTags = styled.div`
  @import '../../styles/variables.css';

  margin-top: 20px;
  margin-left: -15px;

  & span {
    display: inline-block;
    margin-left: 15px;
    font-size: 14px;
    line-height: 18px;
    color: var(--text-color-main-03);
  }
`;

export function BlogPostCard({
  title,
  slug,
  publishDate,
  featureImage,
  excerpt,
  tags,
  locale,
  className,
}) {
  const tagsToRender = removeServiceTags(tags);

  return (
    <BlogPostCardContainer className={className}>
      <BlogPostCardLink to={`/${locale}/blog/${slug}`}>
        <BlogPostCardImage src={featureImage} alt={title} />
        <BlogPostCardDate>
          {new Date(publishDate).toLocaleDateString(locale, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </BlogPostCardDate>
        <BlogPostCardTitle>{title}</BlogPostCardTitle>
        <BlogPostCardExcerpt>{removeMarkdown(excerpt)}</BlogPostCardExcerpt>
        {tagsToRender && (
          <BlogPostCardTags>
            {tagsToRender.map(({ name, id }) => (
              <Tag key={id} name={name} />
            ))}
          </BlogPostCardTags>
        )}
      </BlogPostCardLink>
    </BlogPostCardContainer>
  );
}
