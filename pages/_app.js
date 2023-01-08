function Home({ data }) {
  return (
    <div>
      <h1>HomePages</h1>

      {console.log(data)}
    </div>
  );
}

export async function getServerSideProps() {
  let res = await fetch(
    `https://api.github.com/search/repositories?q=dRahul97`
  );

  let data = await res.json();

  return {
    props: {
      data,
    },
  };
}
export default Home;