export default function Projects({ params }) {
  console.log(params);
  return (
    <>
      <h1>My All projects {params.allProjects}</h1>
    </>
  );
}
