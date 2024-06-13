const skills = [
  {
    title: 'Javascript',
    competency: 5,
    category: ['Web开发', '编程语言', '前端开发'],
  },
  {
    title: 'Typescript',
    competency: 4,
    category: ['Web开发', '编程语言', '前端开发'],
  },
  {
    title: 'HTML',
    competency: 5,
    category: ['Web开发', '编程语言'],
  },
  {
    title: 'CSS/SCSS/SASS',
    competency: 4,
    category: ['Web开发', '编程语言'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Web开发', '前端开发'],
  },
  {
    title: 'Vue',
    competency: 4,
    category: ['Web开发', '前端开发'],
  },
  {
    title: 'Angular',
    competency: 5,
    category: ['Web开发', '前端开发'],
  },
  {
    title: 'Webpack',
    competency: 3,
    category: ['Web开发', '前端开发'],
  },
  {
    title: 'tailWindcss',
    competency: 3,
    category: ['Web开发', '前端开发'],
  },
  {
    title: 'Node.JS',
    competency: 3,
    category: ['Web开发', '后端开发'],
  },
  {
    title: 'Nest.JS',
    competency: 3,
    category: ['Web开发', '后端开发'],
  },
  {
    title: 'Java',
    competency: 5,
    category: ['后端开发', '编程语言', '大数据'],
  },
  {
    title: 'Spring Boot',
    competency: 4,
    category: ['后端开发'],
  },
  {
    title: 'Mybatis',
    competency: 4,
    category: ['后端开发'],
  },
  {
    title: 'Spring Cloud',
    competency: 3,
    category: ['后端开发'],
  },
  {
    title: 'Linux/Bash脚本',
    competency: 4,
    category: ['Web开发', '后端开发'],
  },
  {
    title: 'Maven',
    competency: 4,
    category: ['Web开发', '后端开发'],
  },
  {
    title: 'Nginx',
    competency: 5,
    category: ['Web开发', '后端开发'],
  },
  {
    title: 'Tomcat',
    competency: 4,
    category: ['Web开发', '后端开发'],
  },
  {
    title: 'git',
    competency: 5,
    category: ['Web开发'],
  },
  {
    title: 'MySQL/PostgreSQL',
    competency: 5,
    category: ['Web开发', '数据库'],
  },
  {
    title: 'SQL',
    competency: 5,
    category: ['后端开发', '数据库', '编程语言'],
  },

  {
    title: 'MongoDB',
    competency: 3,
    category: ['Web开发', '数据库', 'NoSQL'],
  },
  {
    title: 'ElasticSearch',
    competency: 3,
    category: ['Web开发', '数据库', 'NoSQL'],
  },

  {
    title: 'Redis',
    competency: 3,
    category: ['Web开发', '数据库', 'NoSQL'],
  },
  {
    title: 'Hbase',
    competency: 4,
    category: ['大数据', '数据库', 'NoSQL'],
  },
  {
    title: 'Hadoop/HDFS/Mapreduce',
    competency: 5,
    category: ['大数据'],
  },
  {
    title: 'Kubernetes',
    competency: 4,
    category: ['容器', '后端开发'],
  },

  {
    title: 'Docker',
    competency: 4,
    category: ['容器', '后端开发'],
  },

  {
    title: 'Python',
    competency: 5,
    category: ['编程语言', '后端开发', '大数据'],
  },
  {
    title: 'Grafana',
    competency: 4,
    category: ['大数据', '前端开发'],
  },
  {
    title: 'Power BI',
    competency: 4,
    category: ['大数据', '前端开发'],
  },
  {
    title: 'GraphQL',
    competency: 3,
    category: ['Web开发', '数据库'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['大数据'],
  },

  {
    title: 'Flink',
    competency: 4,
    category: ['大数据'],
  },
  {
    title: 'Spark',
    competency: 5,
    category: ['大数据'],
  },
  {
    title: 'Airflow',
    competency: 4,
    category: ['大数据'],
  },
  {
    title: 'BigQuery',
    competency: 4,
    category: ['数据库', '大数据'],
  },
  {
    title: 'Ali CLoud',
    competency: 4,
    category: ['云计算'],
  },
  {
    title: 'Google Cloud Platform',
    competency: 4,
    category: ['云计算'],
  },
  {
    title: 'Amazon Web Services',
    competency: 4,
    category: ['云计算'],
  },
  {
    title: 'Azure',
    competency: 4,
    category: ['云计算'],
  },

].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
