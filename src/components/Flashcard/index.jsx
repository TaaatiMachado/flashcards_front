import './Flashcard.css'


const Flashcard = ({ item }) => {
    return (
        <div key={item.id} className="flip-card w-48 h-64 perspective-1000 font-poppins flex">
      <div className="flip-card-inner relative w-full h-full text-center transition-transform duration-800 transform-style-preserve-3d">
        <div className="flip-card-front shadow-flip-card absolute w-full h-full backface-hidden border-8 border-light-accent rounded-xl bg-light-background rotateY-0">
          <p className="title text-xl text-center m-0 text-light-dark border-8 border-light-secondary rounded-md w-full h-full capitalize flex items-center justify-center">{item.primaryWord}</p>
        </div>
        <div className="flip-card-back shadow-flip-card absolute flex flex-col justify-center w-full h-full backface-hidden border-8 border-light-accent rounded-xl bg-light-background rotateY-180">
          <p className="title text-xl text-center m-0 text-light-dark border-8 border-light-secondary rounded-md w-full h-full capitalize flex items-center justify-center">{item.secondaryWord}</p>
        </div>
      </div>
    </div>
    );
}

export default Flashcard