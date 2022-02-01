import '../../styles/_components/Home.css'
import FeatureItems from '../../_components/Feature-items';
import BackgroundImage from '../../Assets/bank-tree.jpeg'


const Home = () => {

  const feature = [
    {
      title: "You are our #1 priority",
      src: `${process.env.PUBLIC_URL}/icon-chat.png`,
      texte: " Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
    },
    {
      title: "More savings means higher rates",
      src: `${process.env.PUBLIC_URL}/icon-money.png`,
      texte: "The more you save with us, the higher your interest rate will be!"
    },
    {
      title: "Security you can trust",
      src: `${process.env.PUBLIC_URL}/icon-security.png`,
      texte: "We use top of the line encryption to make sure your data and money is always safe."
    }
  ]

  return (

    <div className="home">
      <div className="hero" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {feature.map((items, i) => <FeatureItems key={i} data={items} />)}
      </section>
    </div>
  )
}

export default Home
