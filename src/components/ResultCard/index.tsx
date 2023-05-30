import './styles.css';

type Props = {
  nome: string;
  perfil: string;
  seguidores: string;
  localidade: string;
  imgUrl: string;
};

const ResultCard = ({ nome, perfil, seguidores, localidade, imgUrl }: Props) => {
  return (
    <div className="result-container">
      <div className="img-container">
        <img src={imgUrl} alt={nome} />
      </div>
      <div className="result-info-container">
        <h3 className="result-title"> Informações </h3>
        <p className="result-url"><span style={{fontWeight:'bold'}}>Perfil: </span>{perfil}</p>
        <p className="result-followers"> <span style={{fontWeight:'bold'}}>Seguidores: </span>{seguidores}</p>
        <p className="result-location"><span style={{fontWeight:'bold'}}>Localidade: </span>{localidade}</p>
        <p className="result-name"><span style={{fontWeight:'bold'}}>Nome: </span>{nome}</p>
      </div>
    </div>
  );
};

export default ResultCard;
