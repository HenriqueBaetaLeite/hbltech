import MyLogo from './components/MyLogo';

export default function Home() {
  return (
    <div className="flex">
      <section>
        <h1>Boas vindas!</h1>
        <h2>Somos a HBL Tecnologia.</h2>
        <MyLogo />
      </section>
    </div>
  );
}
