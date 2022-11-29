import express from "express"
import * as dotenv from "dotenv"
import { v4 as uuidv4 } from "uuid";


dotenv.config()

const app = express()

app.use(express.json())

// banco de dados

const db = [
    {
        id: "0f517233-bd19-4894-b233-d7bdc010d29b",
        name: "Diego Fernandes",
        age: 29,
        role: "aluno",
        active: true,
        tasks: [
            "estudar aulas",
            "refazer os exercícios da aula"
        ]


    }
]

//rotas
// all users
app.get("/all-users", (req, res) => {
    console.log(req.url);
    console.log(req.method);
  
    return res
      .status(200)
      .json({ messagem: "Bem vindo ao servidor da turma 91 - ENAP", data: db });
  });


/// criar rota que retorna o banco de dados

app.get("all-users", (req,res)=>{
    const users = bancoDados

    return res.status(200).json(users)
})

//POST create

app.post("/newUser", (req, res) => {
    console.log(req.body);
  
    let form = { ...req.body, id: "3d2ea553-a1ff-4e59-bf04-31fafd1bd02c" };
  
    db.push(form);
  
    return res.status(201).json({
      data: form,
      message: "Usuário criado!",
    });
  });





app.listen(process.env.PORT, () => {
    console.log(`App up and running on port http://localhost:${process.env.PORT}`
    );

});