import Footer from '../../container/footer/Footer'
import Navbar from '../../container/navbar/Navbar'
import '../articleFormat.css'

const Jumper = () => {
  return (
    <div className='article-main-format'>
        <Navbar/>
        <span className='article-format-header'>
          <h1>Tutorial Cara Jumper pada Power Supply</h1>
        </span>
        <span className='article-format-content'>
          <p>
            Halo guys! Pernah nggak sih kalian menghadapi masalah dengan power supply kalian, sehingga PC kalian tidak dapat berfungsi dengan baik, atau bahkan tidak bisa menyala? Nah, kali ini gua mau share ilmu seputar komputer. Tanpa basa-basi, langsung aja gua sampaikan tutorial cara melakukan jumper pada power supply (PSU). Tujuannya adalah untuk mengetahui apakah power supply kalian mengalami kerusakan atau tidak.
          </p>
          
          <span>
            <ul className='list-format'>
              <h3 className='list-head'>Bahan yang diperlukan:</h3>
              <li>Power supply yang akan diuji</li>
              <li>Kabel power supply</li>
              <li>Kabel biasa sebagai jumper</li>
          </ul>
          </span>
          <p>
            Langkah-langkahnya:
            <ol className='list-format'>
              <li className='list-head'>Lepaskan kabel dari motherboard</li>
              <p>Pertama lepaskan kabel power dari mother board pc kalian, lalu lepaskan kabel power dari power supply agar aman.</p>
              <span className='img-format'>
                <img src='https://2.bp.blogspot.com/-M1G8upNYCaM/XESjra2CzOI/AAAAAAAAAWs/bPk55EbUbUwIFlmZPELP8PCVwWzMvD1uACK4BGAYYCw/s320/1.jpg' alt='1'/>
              </span>
              <li className='list-head'>Siapkan kabel jumper</li>
              <p>Untuk kabel jumper yang digunakan saya gunakan kabel bekas yang ukurannya pendek sehingga tidak berantakan, kabel yang digunakan bebas tanpa harus menggunakan kabel tertentu.</p>
              <span className='img-format'>
                <img src="https://2.bp.blogspot.com/-RFl9UovWWkM/XESjuNZv7ZI/AAAAAAAAAW0/rSOkbnnEwm4QxzS-MF5RQ6M-DU4cvEOrACK4BGAYYCw/s320/2.jpg" alt='2'/>
              </span>
              <li className='list-head'>Cari kabel warna hijau pada switch power utama ke motherboard dari power supply kalian</li>
              <p>Biasanya kabel yang berwarna hijau pada power supply merupakan kabel yang berfungsi sebagai untuk power on pada power supply, sedangkan warna biru merupakan untuk power off, karena kita ingin melakukan jumper disini kita perlu menemukan switch kabel hijau untuk menyalakan power supply.</p>
              <span className='img-fromat'>
                <img src="https://3.bp.blogspot.com/-0Z-74g3sUVU/XESjxmtejbI/AAAAAAAAAW8/ZJKFY9YxQv8kXYMR0-FMIf4u6cB9gJOeQCK4BGAYYCw/s320/3.jpg" alt='2'/>
              </span>
              <li className='list-head'>Sambungkan kabel jumper pada lubang switch warna hijau dan hitam</li>
              <p>Karena kita akan menyalakan power supply kita harus memasang kabel pada switch dengan kabel hijau sebagai pemicu yang akan dihubungkan pada switch warna hitam seperti di gambar. kabell hitam berfungsi sebagai listrik ground(netral) pada power supplym dengan menghubungkan kedua switch tersebut power supply dapat menyala.</p>
              <span className='img-format'>
                <img src="https://1.bp.blogspot.com/-3mWsFOmsjBY/XESj0vz83eI/AAAAAAAAAXE/PBo0l0CqzqQCYWfyN2lzebwtaD5XFNz-wCK4BGAYYCw/s320/4.jpg" alt='2'/>
                <img src='https://1.bp.blogspot.com/-X1pS7d3jvGg/XESj3CbSGZI/AAAAAAAAAXM/8W53xXGlTgoTl1PDPtBJEGRBnzVHySZDwCK4BGAYYCw/s320/5.jpg' alt='2'/>
              </span>
              <li className='list-head'>Sambungkan kabel power supply kembali pada power listrik.</li>
              <p>Karena kita akan menyalakan power supply kita harus memasang kabel pada switch dengan kabel hijau sebagai pemicu yang akan dihubungkan pada switch warna hitam seperti di gambar. Kabel.</p>
              <span className='img-format'>
                <img src="https://2.bp.blogspot.com/-THb9ZSkF3ms/XESj65bwEgI/AAAAAAAAAXU/uoRVnXolbuofqIMOhDNor1piWtYOzA9pACK4BGAYYCw/s320/6.jpg" alt='2'/>
              </span>
              <li className='list-head'>Power supply sudah menyala.</li>
              <p>Power supply sudah menyala sehingga power supply dapat digunakan untuk keperluan seperti menyalakan fan atau keperluan lainnya. Sebagai contoh penggunaan fan dapat dilihat pada gambar.</p>
              <span className='img-format'>
                <img src="https://4.bp.blogspot.com/-eoWORf1b2ew/XESj9YsIvcI/AAAAAAAAAXg/03PIQHzMFZImbSdaC7bl1MDAm_bocH7ywCK4BGAYYCw/s320/7.jpg" alt='2'/>
              </span>
            </ol>
          </p>
          <p>Sekian ilmu yang dapat saya bagikan, semoga bermanfaat dan dapat diaplikasikan sesuai dengan kebutuhan bersama. Ilmu ini didapat sesuai dengan pengalaman pribadi. Terimakasih all🙏.</p>
          

        </span>
        <Footer/>
    </div>
  )
}

export default Jumper