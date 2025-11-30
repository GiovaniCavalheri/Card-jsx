import MyProfile from "./Components/MyProfile";
import avatarImg from "./assets/Me.jpeg";


function App() {
  return (
    <div className="app">
      <MyProfile
        avatar={avatarImg}
        name="Giovani Cavalheri"
        bio="Desenvolvedor de Software (FullStack), aplicando conhecimentos em Python, Javascript,
React, Typescript, SQL, MongoDB, PHP juntamente de metodologias ágeis para contribuir
com o desenvolvimento de soluções inovadoras."
        phone="+55 (18)99773-2006"
        mail="developer.cavalheri@gmail.com"
        githubUrl="https://github.com/GiovaniCavalheri"
        linkedin="https://www.linkedin.com/in/giovani-cavalheri-dev/"
        Instagram="https://www.instagram.com/i.giovanii/"
      />
      ;
    </div>
  );
}

export default App;
