import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const Main = ({reset}) =>{
    useEffect(() => {
  
    }, []);

    return(
        <div className="text-center d-flex flex-column baseline">
            <h1 className="text-center">Welcome to the trivial challenge!</h1>
            <p className="position-absolute top-50 start-50 translate-middle mb-3">You will be presented with 10 True or false questions.</p>
            <p className="position-absolute top-50 start-50 translate-middle mt-5">Can you score 100% ? </p>
            <Link  className="btn btn-primary position-absolute bottom-0 w-100" to="/game" >
            Begin
            </Link>

        </div>
    )
}
const mapStateToProps = (state) => ({
    puntos: state.puntos,
    answers: state.answer,
  });
const mapDispatchToProps = (dispatch) => ({
    reset() {
        dispatch({
          type: "reset"
        });
      },
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);