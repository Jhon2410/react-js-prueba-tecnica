import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Results = ({ answers, puntos }) => {
  const renderResults = answers.map((answer) => {
    console.log(answer);
    return (
      <div class="card">
        <h5 class="card-header text-center"> question number {answer.idx + 1}</h5>
        <div class="card-body">
          <h5 class="card-title">
            {answer.question.question
              .replaceAll("&quot;", "'")
              .replaceAll("&#039;", "'")
              .replaceAll(" &ldquo;", "'")}
          </h5>
          <p class="card-text">
            The correct_answer was {answer.question.correct_answer} your answer was {answer.myAnswer}
          </p>
          {answer.myAnswer == answer.question.correct_answer.toLowerCase()?<button disabled class="btn btn-success">
            {"You have +1 point"}
          </button>:<button disabled class="btn btn-danger">
                {"You have 0 points"}
          </button>}
        </div>
      </div>
    );
  });

  return (
    <>
    {answers.length !== 0 ? <div className="text-white text-center fs-5 p-fixed"><h1> your score was  : {puntos} </h1> <p className="text-sucess">{puntos * 100 / 10} % good </p></div>:null}
      {renderResults}

      {answers.length === 0 ? (
        <Link to="/" className="text-center">
          Go back <h1>No hay resultados disponibles</h1>
        </Link>
      ) : <div className="text-center"><Link className="btn btn-primary m-auto"  to="/">Try again</Link></div>}
    </>
  );
};

const mapStateToProps = (state) => ({
  puntos: state.puntos,
  answers: state.answer,
});

const mapDispatchToProps = (dispatch) => ({
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
      type: "reset"
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
