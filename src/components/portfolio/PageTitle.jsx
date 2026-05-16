function PageTitle({ breadcrumbs, title }) {
  return (
    <div className="page-title">
      <h1>{title}</h1>
      <ul className="breadcrumbs">
        {breadcrumbs.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default PageTitle;
