import Profile from './Profile' // default가 아닌 경우 {}로 묵어서 호출한다.
import Gallery from './Gallery'

  export default function Gallery() {
    return (
      <section>
        <Profile />
      </section>
    );
  }
  