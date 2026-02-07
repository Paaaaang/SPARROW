export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            Harbor & Voyage
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            하루에 두 번 시작되는 곳, 당신의 항해가 시작됩니다
          </p>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 mb-4">
              햇살이 비추는 항구에서는 항해를 준비하는 선원들의 여유로운 카페가,
              달빛이 내리는 바다 위에서는 모험담을 나누는 선원들의 활기찬 펍이 펼쳐집니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="p-6 bg-blue-50 rounded-lg">
                <h2 className="text-2xl font-bold mb-3 text-blue-900">낮 - Harbor</h2>
                <p className="text-gray-700">
                  바다로 나서기 전, 커피 한 잔과 함께 오늘의 계획을 세우는 항구 카페
                </p>
              </div>
              <div className="p-6 bg-indigo-50 rounded-lg">
                <h2 className="text-2xl font-bold mb-3 text-indigo-900">밤 - Voyage</h2>
                <p className="text-gray-700">
                  해가 지고, 모험담을 나누며 새로운 사람들과 연결되는 선원들의 펍
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
