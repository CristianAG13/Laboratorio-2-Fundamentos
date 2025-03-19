import './App.css'
import { useRef, useState } from 'react'

function App() {
  const audioRef = useRef(null); // Referencia al audio
  const [isPlaying, setIsPlaying] = useState(false); // Estado para saber si está reproduciendo

  const toggleAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/GeneratedWithElevenlabs.mp3'); // Ruta al archivo de audio en public
    }

    if (isPlaying) {
      audioRef.current.pause(); // Pausar el audio
      setIsPlaying(false);
    } else {
      audioRef.current.play(); // Reproducir el audio
      setIsPlaying(true);
    }
  };

  return (
    <>
      {/* Espacio para mostrar una imagen */}
      <div>
        <img 
          src="DALL·E 2025-03-18 17.58.31 - A humanoid male robot with an average muscular build, appearing to be around 27 years old. The robot has a sleek, futuristic design with metallic silv.webp" // Reemplaza con la URL de tu imagen
          alt="Descripción de la imagen"
          style={{ width: '300px', height: 'auto', marginBottom: '20px' }}
        />
      </div>

      {/* Botón para reproducir o pausar el audio */}
      <div>
        <button 
          onClick={toggleAudio}
          style={{
            padding: '10px 20px',
            backgroundColor: isPlaying ? '#FF0000' : '#007BFF', // Cambia el color según el estado
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          {isPlaying ? 'Pausar Audio' : 'Reproducir Audio'}
        </button>
      </div>
    </>
  )
}

export default App
