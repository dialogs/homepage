import React from 'react';

import { Section } from '../Section/Section';
import { Heading } from '../Heading/Heading';

export function Easy() {
  return (
    <Section className="easy">
      <div className="easy__cols">
        <div className="easy__col easy__col--left">
          <Heading className="easy-title">
            dialog — это просто и эффективно
          </Heading>
          <div className="easy-image">
            <img
              className="easy-img"
              src="/images/home/easy/easy-export.png"
              srcSet="/images/home/easy/easy-export@2x.png 2x"
              alt=""
            />
          </div>
        </div>
        <div className="easy__col easy__col--right">
          <div className="easy-info">
            <div className="easy-info-item">
              <div className="easy-info-title">В диалоге – проще</div>
              <div className="easy-info-text">
                Современный мир перегружен шумом - реклама, новости, отвлекающие
                уведомления. IT-продукты в погоне за новыми функциями забывают о
                пользователях. Dialog помогает сфокусироваться на решении задач
                без сложных интерфейсов и фич - берись и работай, как тебе
                удобно.
              </div>
            </div>
            <div className="easy-info-item">
              <div className="easy-info-title">В диалоге – эффективнее</div>
              <div className="easy-info-text">
                Мы против бюрократии, бесполезных встреч и формальных писем с
                километровыми подписями. Чем эффективнее коммуникация, тем
                быстрее команда достигает своих целей. Dialog помогает
                эффективно решать личные и командные задачи без перегруженных
                процессов.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
