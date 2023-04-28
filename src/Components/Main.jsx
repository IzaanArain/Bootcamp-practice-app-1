const Main = ({ data,click}) => {
  return (
    <div>
      {/* <h2>{data[1].mail}</h2> */}


      {data.map((val)=>{
        return <h1 key={val.id}>{val.name}</h1>
      })}

      <button onClick={click}>Click</button>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        distinctio, voluptatem, praesentium necessitatibus cum natus, nisi
        molestias repellendus enim harum corporis ut accusantium laborum. Saepe
        nesciunt molestiae, libero nostrum c onsequatur eum quibusdam beatae
        consequuntur fuga. Quia exercitationem fugiat quaerat vel esse id
        asperiores voluptatibus pariatur modi ratione! Voluptatibus corrupti sed
        perspiciatis doloribus laboriosam officiis. In consectetur,sequi
        obcaecati fugit quos ex aspernatur minus ullam! Impedit ipsam sed
        asperiores neque cupiditate itaque, ullam molestiae magnam similique
        corrupti numquam sunt at nobis inventore minus officiis eius quaerat
        voluptas, mollitia voluptatem ipsa repudiandae alias! Iure explicabo
        quasi deserunt fuga quod, dignissimos libero maiores!
      </p>

    </div>
  );
};

export default Main;


// export const Child1 = () => {
//   return (
//     <>
//       <h2>this is child 1</h2>
//     </>
//   );
// };

// export const Child2 = () => {
//   return (
//     <>
//       <h2>this is child 2</h2>
//     </>
//   );
// };


