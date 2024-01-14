import { Card, Col, Container, Row, Image } from "react-bootstrap"
import aquamanImage from "../assets/Image/trending/aquaman.jpg"
import siksakuburImage from "../assets/Image/trending/siksakubur.jpg"
import avengerImage from "../assets/Image/trending/avenger.jpg"
import lanskyImage from "../assets/Image/trending/lansky.jpg"
import spidermanImage from "../assets/Image/trending/spiderman.jpg"
import hulkImage from "../assets/Image/superhero/hulk.jpg"

const Trending = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">TRENDING MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="trending">
                        <Card className="movieImage">
                            <Image src={aquamanImage} alt="Aquaman Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Aquaman</Card.Title>
                                    <Card.Text className="text-left">
                                        Black Manta seeks revenge on Aquaman for his father's death.
                                        Wielding the Black Trident's power, he becomes a formidable foe.
                                        To defend Atlantis, Aquaman forges an alliance with his
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={siksakuburImage} alt="Siksa Kubur Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Siksa Kubur</Card.Title>
                                    <Card.Text className="text-left">
                                        Siksa Neraka adalah film hantu jagal Indonesia tahun 2023 yang disutradarai oleh Anggy Umbara.
                                        Film yang merupakan diadaptasi dari komik dengan judul yang sama.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={avengerImage} alt="Avenger Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center"> The Avenger</Card.Title>
                                    <Card.Text className="text-left">
                                        After Thanos, an intergalactic warlord, disintegrates half of the universe,
                                        the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={lanskyImage} alt="Lansky Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center"> Lansky</Card.Title>
                                    <Card.Text className="text-left">
                                        Meyer Lansky, a notorious former gangster, calls a writer, David Stone, to write his story.
                                        However, he is also being investigated by the FBI, who believe that he is hiding a vast fortune.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={spidermanImage} alt="Spiderman Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center"> Spiderman</Card.Title>
                                    <Card.Text className="text-left">
                                        Meyer Lansky, a notorious former gangster, calls a writer, David Stone, to write his story.
                                        However, he is also being investigated by the FBI.a notorious former gangster
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={hulkImage} alt="Hulk Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center"> Hulk</Card.Title>
                                    <Card.Text className="text-left">
                                        Meyer Lansky, a notorious former gangster, calls a writer, David Stone, to write his story.
                                        However, he is also being investigated by the FBI, who believe that he is hiding a vast fortune.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Trending