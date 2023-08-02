import Navbar from '../../container/navbar/Navbar-Article'
import Footer from '../../container/footer/Footer'
import '../articleFormat.css'

const Ai = () => {
  const homeNav = '/'
  const aboutNav = '/#about'
  const portoNav = '/#porto'
  const certifNav = '/#certif'

  return (
    <div className='article-main-format'>
       <Navbar home={homeNav} porto={portoNav} certif={certifNav} about={aboutNav}/>
      <span className='article-format-header'>
        <h1>Artificial Intelligence: Penemuan atau Ancaman?</h1>
      </span>
      <span className='article-format-content'>
        <h3 className='section-title'>Deskripsi Artificial Intelligence (AI)</h3>
        <br/>
        <p>Istilah “kecerdasan buatan” pertama kali dikemukakan pada tahun 1956 di Konferensi Darthmouth. Seperti yang telah diketahui, Artificial Intelligence, AI, Machine Learning, atau Kecerdasan Buatan adalah simulasi kecerdasan manusia dalam sebuah mesin yang diprogram untuk berpikir seperti manusia dan meniru tindakannya. Dengan kata lain, AI merupakan ilmu untuk membuat komputer dapat meniru cara berpikir dan bertindak seperti layaknya manusia. Saat ini, seiring berkembangnya teknologi, jumlah ilmuwan yang melakukan berbagai riset yang berkaitan dengan AI semakin banyak. Tujuan dari berbagai riset AI ini untuk membantu manusia menjawab seluruh permasalahan yang tidak dapat diprediksi, khususnya di dunia komputer.</p>
        <img src='https://1.bp.blogspot.com/-SFNrs3_BQbE/Xw604uL-hDI/AAAAAAAAA1Q/pEl5mIZAn5MlzITQyIM-HhQO4UCmzjI4wCLcBGAsYHQ/w625-h351/demystifying-artificial-intelligence-13-638.jpg' alt='penjelasan AI' className='image-format'/>
        <h3 className='section-title'>Kaitan Antara AI dengan VUCA</h3>
        <img src='https://1.bp.blogspot.com/-d-fVA_o4aY4/Xw60FrO5c-I/AAAAAAAAA1E/r6kkljAdo-0k3mgoKZPMhRsAvtqqsc_owCLcBGAsYHQ/w575-h625/vuca.jpg' className='image-format' alt='vuca-ai'/>
        <p>Dalam penerapannya, AI menjadi suatu perangkat yang sangat membantu meringankan pekerjaan manusia. Penemuan AI menjadi suatu alat untuk membuat semua jenis kegiatan menjadi sangat mudah. Mulai dari membantu menghitung dan membaca secara otomatis, memproduksi barang secara instan, menjadi partner penting dalam suatu pekerjaan, hingga menjadi teman ngobrol di kala waktu seseorang merasa kesepian. Semua itu dapat dilakukan oleh AI dengan mudah, terarah, dan eksak (tepat), bahkan sempurna. Namun saking hebatnya, AI bisa melampaui kecerdasan di atas rata-rata manusia dan mampu membawa dampak buruk bagi sebagian orang, salah satunya yaitu terancamnya pekerjaan manusia digantikan oleh AI. Ditambah, perkembangan AI kini begitu pesat. Hal ini tentu membawa keresahan yang cukup besar bagi banyak orang, terutama para pekerja yang hanya bergantung pada suatu jenis pekerjaan saja.</p>
        <br/>
        <p>Dari kasus tersebut, kita tau bahwa AI menjadi salah satu tantangan masa depan bagi makhluk hidup di bumi ini, khususnya manusia. Menurut saya, tantangan dari AI juga mencakup kriteria dari VUCA (Volatility, Uncertainity, Complexity, Ambiguity), beberapa di antaranya yaitu Volatility dan Complexity. AI termasuk hal yang bersifat “Volatility”, karena sifatnya tidak terduga, waktu keberadaannya tidak dapat diprediksi, dan dalam jangka panjang tidak diketahui memiliki dampak yang baik atau buruk. Selain itu, AI juga memiliki sifat “Complexity”. AI merupakan suatu hal yang rumit, kompleks, dan banyak bagian yang berkaitan dengan kecerdasan buatan ini sehingga menimbulkan rasa khawatir jika berdampak buruk kepada suatu aspek yang tidak dapat kita ketahui.</p>
        <br/>
        <p>Setelah mengetahui hubungan antara AI dan VUCA, maka perlu dicari suatu solusi yang efektif dan mampu mengatasi tantangan tersebut. Menurut Patrick Hollingworth, dijelaskan bahwa ada tiga wawasan yang perlu diketahui tentang diri sendiri agar kita dapat menghadapi masa depan. Hal ini disebut sebagai “Alpine Style Model”, berisi 3 wawasan. Yang pertama adalah skills, berkaitan dengan mengasah keterampilan “sensemaking”, “decision thinking”, dan “getting critical”. Yang kedua ada insights, mencakup “strengths”, “weakness”, “risk attitude”. Dan yang terakhir yaitu traits, terdiri dari sifat “growth-mindset”, “always be learning”, dan “anti-alpha”.</p>
        <ul className='list-format'>
          <p>Sumber:</p>
          <li><a href='https://www.cnbcindonesia.com/profil/20190908023128-41-97841/artificial-intelligence-itu-apa-sih-robot'>https://www.cnbcindonesia.com/profil/20190908023128-41-97841/artificial-intelligence-itu-apa-sih-robot</a></li>
        </ul>
      </span>
      <Footer/>
    </div>
  )
}

export default Ai