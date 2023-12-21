import React, { useState,useEffect }from 'react'
import logo from '../../Assets/logo.png'
import card1 from '../../Assets/card1.png'
import card2 from '../../Assets/card2.png'
import card3 from '../../Assets/card3.png'
import './about.scss'


const About = () => {

  const [visitCount, setVisitCount] = useState(0);
  const [count, setCount] = useState(0);
  const [generate, setGenerate] = useState(0);
  const [result, setResult] = useState(1);

  useEffect(() => {
    let count = localStorage.getItem('visitCount');
    count = count ? parseInt(count) + 1 : 1;
    localStorage.setItem('visitCount', count);
    setVisitCount(count);
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 100) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 500);
    
    return () => clearInterval(interval);
  }, [count]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (generate < 50) {
        setGenerate((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 200);
    
    return () => clearInterval(interval);
  }, [generate]);

  useEffect(() => {
    const multiply = () => {
      let currentValue = 1;
      const interval = setInterval(() => {
        if (currentValue <= 4) {
          setResult((prevResult) => prevResult * 2);
          currentValue++;
        } else {
          clearInterval(interval);
        }
      }, 1000);

      return () => clearInterval(interval);
    };

    multiply();
  }, []);
  return (
    <div className='about'>
      <div className='about-wrapper'>
        <div className='uber-uns'>
          <div className='uber-upper'>
            <h1>- ÜBER UNS -</h1>
            <h2>Wir entwickeln Projekte von der Konzeption bis zu den letzten Details</h2>
            <div><img src={logo} alt="" /></div>
          </div>
          <div className='uber-lower'>
            <div>
              <div>
              <div>{visitCount}</div>
                <div>{count}</div>
              </div>
              <div>
                <div>{generate}</div>
                <div>{result}</div>
              </div>
            </div>
            <div>
              <h3>EDMA GmbH</h3>
              <p>wurde im Jahr 2010 von einem Expertenteam des Maschinenbaus gegründet und hat über einen Zeitraum von mehr als einem Jahrzehnt mehr als 400 Projekte mit unterschiedlichem Fachwissen im Bereich Bauingenieurwesen und Beratung abgeschlossen. Im Laufe der Entwicklung zahlreicher Bauprojekte sowie der Planung und Umsetzung schlüsselfertiger Projekte haben wir ein tiefes Verständnis dafür gewonnen, wie wir die Effizienz optimieren und maximieren und gleichzeitig die Auswirkungen auf die Umwelt minimieren können.</p>
            </div>
          </div>
        </div>
        <div className='cards-wrapper'>
          <h2>WAS WIR TUN</h2>
          <h1>Ihre Spezialisierung</h1>
          <div className='cards'>
            <div>
              <img src={card1} alt="" />
              <h3>ARCHITECTURE & INFRASTRUCTURE</h3>
              <p>Unsere Hauptaufgabe besteht darin, unsere Projekte nachhaltiger, ästhetisch ansprechender und komfortabler für die Gemeinschaft zu machen. Außerdem versuchen wir, Einrichtungen zu entwerfen, die Lebensbedingungen, Arbeitsplätze und verschiedene Aktivitäten bieten, angemessen und wirtschaftlich sind und sich in die Umgebung einfügen.</p>
            </div>
            <div>
              <img src={card2} alt="" />
              <h3>HVAC ENGINEERING</h3>
              <p>EDMA ist ein Designstudio, das sich auf Design, Konstruktion und Überwachung spezialisiert hat. Die Tätigkeit als Designstudio begann im Jahr 2010 und realisiert seit über einem Jahrzehnt viele Projekte mit unterschiedlichem Charakter im Bereich Bau und Design. Als Unternehmen sind wir bestrebt, unsere Projekte an die neuesten Entwicklungen im Bereich Architektur und Materialien der Zeit anzupassen, immer basierend auf den Kundenanforderungen, die für den Erfolg entscheidend sind. Wir bieten Ideen und Tipps, wie es dort aussehen könnte, wo Sie leben, arbeiten oder sich ausruhen. Unser Ziel ist es, unsere Projekte qualitativ hochwertig, funktional, ästhetisch und praktisch zu gestalten. Wir bieten Dienstleistungen für verschiedene Arten von Bau und Design an. Mit qualifiziertem Personal und Professionalität bei der Bereitstellung von Dienstleistungen im Bereich der Gestaltung individueller und kollektiver Wohnanlagen, Verwaltungseinrichtungen, Abwasseraufbereitungsanlagen, Straßen- und öffentliche Infrastrukturentwässerung, Kanalisation, Wasserversorgungs- und Entwässerungskanäle, Gastronomieeinrichtungen usw. Wir bieten Ihnen Qualität, Genauigkeit und Verantwortung für unsere Projekte. Jede Ihrer Anfragen ist eine Pflicht für uns, und jede Pflicht für uns ist eine Verpflichtung.</p>
            </div>
            <div>
              <img src={card3} alt="" />
              <h3>WWTP</h3>
              <p>Unsere Vision für die Zukunft ist, dass Architektur- und Bauprojekte so wirtschaftlich und ökologisch wie möglich sind. In einer vom Prinzip der Ökologisierung dominierten Umwelt, in der das soziale Wohlergehen der Menschen an erster Stelle steht und in der Objekte mit der Umwelt und den Entwicklungen der Zeit übereinstimmen, sind sie zweifellos eine Quelle des Wohlergehens und des sozialen und sozialen Lebens.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About