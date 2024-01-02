const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

async function Data() {
  const data = await fetchData();
  console.log(data);
  return (
    <main>
      {data?.map((post) => (
        <li
          key={post.id}
          className="m-2 px-3 py-2 border hover:bg-gray-200 duration-150"
        >
          {post.title}
        </li>
      ))}
    </main>
  );
}

export default Data;
