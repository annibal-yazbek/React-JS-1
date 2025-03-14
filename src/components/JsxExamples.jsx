import React from "react";

const JsxExamples = () => {
  const userName = "Carlos";

  const user = {
    name: "Carlos",
    age: 25,
    city: "São Paulo",
  };

  function getGreeting(name) {
    return `Olá, ${name}`;
  }

  const userIsLoggedIn = false;

  const userRole = "admin";

  const users = [
    { id: 1, name: "Carlos", age: 25 },
    { id: 2, name: "Ana", age: 30 },
    { id: 3, name: "Pedro", age: 40 },
  ];

  return (
    <div>
      {/* BASICO */}
      <h2>Conteúdo que o usuário vai ver</h2>
      {/* Listando dados do usuário */}
      <p>O nome do usuário é: {userName}</p>
      <p>
        Usuário: {user.name}, Idade: {user.age}, Cidade: {user.city}
      </p>
      <p>{2 + 2}</p>

      <p>{getGreeting(userName)}</p>
      <p>{getGreeting("Annibal")}</p>

      {/* DIFERENÇAS DO HTML */}
      <div class="alguma-coisa">Este cara</div>

      <div className="teste">ok</div>

      <button onClick={() => alert("Teste")}>clique em mim</button>

      <input type="text" placeholder="Digite algo" />

      {/* RENDERIZAÇÃO CONDICIONAL */}
      {userIsLoggedIn ? (
        <div>
          <p>Caso: está logado</p>
        </div>
      ) : (
        <div>
          <p>Caso: NÃO está logado</p>
        </div>
      )}

      <p>{userRole === "admin" && "Você é um admin"} </p>

      {/* RENDERIZAÇÃO DE LISTAS */}
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.id} - {user.name} - {user.age}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JsxExamples;
