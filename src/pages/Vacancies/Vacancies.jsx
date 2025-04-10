import { AppContainer } from "@/layouts/AppContainer";
import styles from "./vacancies.module.scss";
import { Breadcrumbs } from "@/common/ui/BreadCrumbs";
import { ROUTER_PATHS } from "@/routes/routerPaths";
import { useGetJobsQuery } from "@/store/api/vacaciesApi";
import { Phone } from "@/common/ui/Phone";

export function Vacancies() {
  const { data = [] } = useGetJobsQuery();
  return (
    <main className={styles.main}>
      <AppContainer>
        <Breadcrumbs
          items={[
            { path: "/", label: "Главная" },
            { path: ROUTER_PATHS.jobs, label: "Вакансии" },
          ]}
        />
        <h1>Вакансии</h1>
        <div className={styles.container}>
          {data.map((job) => {
            return (
              <div className={styles.card} key={job.id}>
                <p>{job.title}</p>
                <p>{job.description}</p>
                <p>{job.salary}</p>
                <Phone number="+7 904 271 35 90" link="tel:+7 904 271 35 90" />
              </div>
            );
          })}
        </div>
      </AppContainer>
    </main>
  );
}
