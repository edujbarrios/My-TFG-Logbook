import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Docs Section',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Here in this section, I will explain the structure of the logbook. The documentation will detail the day-by-day deployment of my final degree thesis, covering progress, decisions, and methodologies in detail.
      </>
    ),
  },
  {
    title: 'What is this in detail?',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
This is a documentation site built as a logbook during Eduardo Jose Barrios García's research about AI tools to enhance glaucoma detection as part of his final degree thesis project.
      </>
    ),
  },
  {
    title: 'Blog Section: Research Insights',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        The blog will contain various posts created throughout the research process. Topics will include prompt engineering, Vision Transformers (ViTs), Neural Networks, and Large Language Models (LLMs).
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
