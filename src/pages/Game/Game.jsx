import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
const Game = ({ question, setRespuestas, agregar, score, reset }) => {
  const [cuestionario, setCuestionario] = useState([]);
  const [indexQuestion, setIndexQuestion] = useState(0);
  useEffect(async () => {
    reset();
    const res = await question;
    await setCuestionario(res.results);
  }, []);
  const changeState = (obj) => {
    
      let currentIndex = indexQuestion;
      if (cuestionario[currentIndex]) {
        if (
          cuestionario[currentIndex].correct_answer.toLowerCase() ==
          obj.myAnswer
        ) {
          agregar();
          setRespuestas(obj);
        } else {
          setRespuestas(obj);
        }
        setIndexQuestion((currentIndex += 1));
      
    }
  };
  const preguntas = cuestionario.map((question, indice) => {
      if(indexQuestion == 10){
          return <Redirect to="/results"></Redirect>

      }
    if (indice == indexQuestion) {
      return (
        <div className="text-center " key={indice}>
          <h1 className="text-center animate__animated animate__bounce animate__delay-1s">{question.category}</h1>
          <div className="border border-1 p-3 position-absolute top-50 start-50 translate-middle">
            {question.question
              .replaceAll("&quot;", "'")
              .replaceAll("&#039;", "'")
              .replaceAll(" &ldquo;", "'")}
            <div className=" m-3 animate__animated animate__bounce animate__faster">
              <button
                className="btn btn-outline-success p-3 col-6"
                onClick={() =>
                  indexQuestion == 10
                    ? null
                    : changeState({
                        idx: indexQuestion,
                        myAnswer: "true",
                        question,
                      })
                }
              >
                True
              </button>
              <button
                className="btn btn-outline-danger p-3 col-6"
                onClick={() =>
                  indexQuestion == 10
                    ? null
                    : changeState({
                        idx: indexQuestion,
                        myAnswer: "false",
                        question,
                      })
                }
              >
                False
              </button>
            </div>
          </div>
          <h6 className="position-absolute bottom-0 text-center w-100 animate__animated animate__bounce animate__delay-2s animate__infinite">
            question {indice} / 10   - your score is :{score}
          </h6>
        </div>
      );
    }
  });
  return <>{preguntas}</>;
};

const mapStateToProps = (state) => ({
  score: state.puntos,
  respuestas: state.respuestas,
  question: state.question,
});

const mapDispatchToProps = (dispatch) => ({
  reset() {
    dispatch({
      type: "reset_notify",
    });
  },
  agregar() {
    dispatch({
      type: "agregar_puntos",
    });
  },
  restar() {
    dispatch({
      type: "restar_puntos",
    });
  },
  setRespuestas(state) {
    dispatch({
      type: "agregar_respuestas",
      state: state,
    });
  },
  reset() {
    dispatch({
      type: "reset",
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
