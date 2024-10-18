import CrispyButton from './components/crispyButton'

export default function Home() {
    return (
      <div className="min-h-screen bg-crispypix-100 text-crispypix-1200 p-8">
        <h1 className="text-pixel-lg font-pixel mb-8">CrispyPix CSS Demo</h1>
        <div className="space-y-4">
          <CrispyButton color="primary" size="small">Small Primary</CrispyButton>
          <CrispyButton color="secondary" size="medium">Medium Secondary</CrispyButton>
          <CrispyButton color="accent" size="large">Large Accent</CrispyButton>
        </div>
      </div>
    )
  }

