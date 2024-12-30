import Header from "../components/Header";
import Footer from "../components/Footer";
import mephoto from "../assets/img/me.jpg";


const About = ({ click, handleClick, handleChangeTheme, theme }) => {
    return (
        <>
            <div className="min-h-screen bg-slate-50 dark:bg-gray-950 font-farro">
                <main className="container mx-auto px-6 py-12 mt-20">
                    <section className="px-12">
                        <h1 className="text-green-600 text-center text-3xl font-farro-bold font-bold">¿Qué es Lorem Ipsum?</h1>
                        <p className="text-gray-700 dark:text-gray-300 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare odio nec neque mollis scelerisque a eu turpis. Duis neque lorem, condimentum sed metus ac, tristique mattis odio. Ut in est vel diam faucibus mattis vitae non ligula.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </section>

                    <section className="px-12 mt-12 flex gap-4">
                        <div className="w-3/6">
                            <img
                                src={mephoto}
                                alt="About"
                                className="w-44 h-44 rounded-full object-cover "
                            />
                        </div>

                        <div className="my-auto">
                            <h1 className="text-green-600 text-2xl font-farro-bold font-bold">¿Quien Soy?</h1>
                            <p className="text-gray-700 dark:text-gray-300 text-sm mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare odio nec neque mollis scelerisque a eu turpis. Duis neque lorem, condimentum sed metus ac, tristique mattis odio. Ut in est vel diam dipiscing elit. Sed ornare odio nec neque mollis scelerisque a eu turpis.
                            </p>
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        </>
    )
}

export default About
