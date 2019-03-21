import React from 'react';

import { PageHeader } from '../PageHeader/PageHeader';
import { Section } from '../Section/Section';

export function Incompany() {
	return (
		<Section className="home__section incompany">
			<PageHeader className="incompany-title">
				Делаем коммуникацию внутри любой компании простой и эффективной
			</PageHeader>
			<div className="incompany-text">
				dialog API позволяет оптимизировать процессы, связав мессенджер и
				сервисы компании. Создавайте ботов самостоятельно с помощью{' '}
				<a
					href="https://dialogs.github.io/bots-docs/"
					className="link--default"
				>
					Bot SDK
				</a>{' '}
				или воспользуйтесь услугами партнёра-интегратора.
			</div>

			<div className="tabs__parent">
				<div className="tab__panel">
					<div
						className="tab__button tab__button--current"
						data-target="marketing"
					>
						Маркетинг
					</div>
					<div className="tab__button" data-target="development">
						Разработка
					</div>
					<div className="tab__button" data-target="hr">
						HR
					</div>
					<div className="tab__button" data-target="sales">
						Продажи
					</div>
					<div className="tab__button" data-target="support">
						Техническая поддержка
					</div>
					<div className="tab__button" data-target="security">
						Служба безопасности
					</div>
				</div>

				<div className="accordion">
					<div className="accordion__button" data-open="false">
						Маркетинг
					</div>
					<div
						className="accordion__content accordion__content--visible"
						data-content="marketing"
					>
						<div className="incompany__content-title">
							Пример оптимизации процесса
						</div>
						<div className="incompany__content-images">
							<img src="/images/home/incompany/icon-marketing.svg" alt="" />
							<img src="/images/home/incompany/icon-arrows.svg" alt="" />
							<img
								src="/images/home/incompany/logo-dlg.png"
								alt=""
								className="dlg"
							/>
						</div>
						<div className="incompany__content-description">
							Будьте в курсе результатов маркетинговых активностей с
							уведомлениями из аналитических систем (например, Google
							Analytics).
						</div>
					</div>

					<div className="accordion__button" data-open="false">
						Разработка
					</div>
					<div className="accordion__content" data-content="development">
						<div className="incompany__content-title">
							Пример оптимизации процесса
						</div>
						<div className="incompany__content-images">
							<img
								src="/images/home/incompany/logo-jira.svg"
								alt=""
								className="jira"
							/>
							<img src="/images/home/incompany/icon-arrows.svg" alt="" />
							<img
								src="/images/home/incompany/logo-dlg.png"
								alt=""
								className="dlg"
							/>
						</div>
						<div className="incompany__content-description">
							Автоматизируйте процессы — синхронизируйте статусы задач из Jira в
							dialog.
						</div>
					</div>

					<div className="accordion__button" data-open="false">
						HR
					</div>
					<div className="accordion__content" data-content="hr">
						<div className="incompany__content-title">
							Пример оптимизации процесса
						</div>
						<div className="incompany__content-images">
							<img
								src="/images/home/incompany/icon-hr.svg"
								alt=""
								className="hr"
							/>
						</div>
						<div className="incompany__content-description">
							Сократите время на работу с кандидатами – передайте рутинную
							работу сервису. Программа сама выберет время и назначит
							собеседование.
						</div>
					</div>

					<div className="accordion__button" data-open="false">
						Продажи
					</div>
					<div className="accordion__content" data-content="sales">
						<div className="incompany__content-title">
							Пример оптимизации процесса
						</div>
						<div className="incompany__content-images">
							<img
								src="/images/home/incompany/icon-amocrm.svg"
								alt=""
								className="amocrm"
							/>
						</div>
						<div className="incompany__content-description">
							Будьте всегда в курсе сделок с автоматическим обновлением статусов
							из CRM.
						</div>
					</div>

					<div className="accordion__button" data-open="false">
						Техническая поддержка
					</div>
					<div className="accordion__content" data-content="support">
						<div className="incompany__content-title">
							Пример оптимизации процесса
						</div>
						<div className="incompany__content-images">
							<img
								src="/images/home/incompany/icon-zendesk.svg"
								alt=""
								className="zendesk"
							/>
						</div>
						<div className="incompany__content-description">
							Сократите время ответа службы поддержки — соберите все запросы в
							одну систему.
						</div>
					</div>

					<div className="accordion__button" data-open="false">
						Служба безопасности
					</div>
					<div className="accordion__content" data-content="security">
						<div className="incompany__content-title">
							Пример оптимизации процесса
						</div>
						<div className="incompany__content-images">
							<img
								src="/images/home/incompany/security.svg"
								alt=""
								className="security"
							/>
						</div>
						<div className="incompany__content-description">
							Интеграции с антивирусами, системами контроля утечек данных 
							(DLP). Оповещения о событиях системы безопасности.
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
}
