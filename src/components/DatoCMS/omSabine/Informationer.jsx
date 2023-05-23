import Anchor from "../../Anchor";

function Informationer({ content }) {
  return (
    <section className="bg-grey-dark text-offWhite px-4 py-16">
      <div className=" grid lg:flex lg:justify-evenly  max-w-[1450px] mx-auto gap-8 justify-items-center content-center items-center ">
        <article className=" grid gap-6">
          <h2 className="text-gold-light text-5xl font-extralight">{content.heading}</h2>
          <h3 className="text-gold-light text-4xl font-tangier ">{content.subHeading}</h3>

          <p className="max-w-xl mb-4">{content.paragraph}</p>

          <Anchor className="button-primary" href={content.knap[0].url}>
            {content.knap[0].text}
          </Anchor>
        </article>

        <div className="max-lg:w-full max-lg:max-w-xl grid gap-8">
          <div>
            <h4 className="text-gold-light text-xl">{content.aabningstiderHeading}</h4>
            <p>{content.tider}</p>
          </div>
          <div>
            <h4 className="text-gold-light text-xl">{content.lokationHeading}</h4>
            <p>{content.lokation}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Informationer;