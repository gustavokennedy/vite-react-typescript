import { Player } from '@lottiefiles/react-lottie-player';

export function LoadingComponente() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="text-white flex flex-col items-center">
        <div className="mb-5">
          <Player
            className="h-16"
            autoplay
            loop
            src="https://assets2.lottiefiles.com/packages/lf20_sjcbakkb.json"
          />
        </div>
        <div className="mt-4 text-center">Carregando...</div>
      </div>
    </div>
  );
}
