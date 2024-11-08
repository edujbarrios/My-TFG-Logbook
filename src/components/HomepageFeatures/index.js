import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Importa las imágenes PNG específicas para cada sección
import documentationImage from '@site/static/img/documentation.png';
import poweredImage from '@site/static/img/powered.png';
import blogImage from '@site/static/img/blog.png';

const FeatureList = [
  {
    title: 'Docs Section',
    image: documentationImage,
    description: (
      <>
        Here in this section, I will explain the structure of the logbook. The documentation will detail the day-by-day deployment of my final degree thesis, covering progress, decisions, and methodologies in detail.
      </>
    ),
  },
  {
    title: 'What is this in detail?',
    image: poweredImage,
    description: (
      <>
        This is a documentation site built as a logbook during my research about AI tools to enhance glaucoma detection as part of my final degree thesis project.
      </>
    ),
  },
  {
    title: 'Blog Section: Research Insights',
    image: blogImage,
    description: (
      <>
        The blog will contain various posts created throughout the research process. Topics will include prompt engineering, Vision Transformers (ViTs), Neural Networks, and Large Language Models (LLMs).
      </>
    ),
  },
];

function Feature({ image, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* Renderiza la imagen específica de cada sección */}
        <img src={image} alt={title} className={styles.featureImg} />
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

