import Head from 'next/head';
import Link from 'next/link';

const Page = () => {
  return (
    <>
      <Head>
        <title>Case Registration</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="container mx-auto p-4">
        <header className="mt-4 flex flex-col items-center">
          <img src="/assets/das.png" alt="DAS Logo" className="w-32 h-32" />
          <h1 className="text-4xl font-bold">Case Registration</h1>
          <nav className="mt-4">
            <ol className="flex space-x-2">
              <li className="text-blue-600">1. Start Registration</li>
              <li>2. Your Case & Documents</li>
              <li>3. Your Information</li>
              <li>4. Summary</li>
              <li>5. Submit</li>
            </ol>
          </nav>
        </header>

        <section className="my-4">
          <h2 className="text-2xl font-semibold">Start Registration</h2>
          <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4">
            <h4 className="font-bold">Important Information</h4>
            <ul className="list-disc pl-5">
              <li>
                Collision damage?{' '}
                <Link href="#">
                  <div className="text-blue-600">Report your case with collision damage here</div>
                </Link>
              </li>
              <li>
                Mass damage? Is your case part of mass damage?{' '}
                <Link href="#">
                  <div className="text-blue-600">Report your mass damage case here</div>
                </Link>
              </li>
              <li>
                Entrepreneur?{' '}
                <Link href="#">
                  <div className="text-blue-600">Report your business case here</div>
                </Link>
              </li>
              <li>
                Faster registration? Have your policy number, policy sheet, and contact details of your intermediary at hand.
              </li>
              <li>Attachments are not mandatory in this form: you can always submit them later.</li>
            </ul>
          </div>

          <p className="mt-4">Registering your case takes 10-15 minutes.</p>

          <form action="/step2" method="post" className="space-y-4">
            <div className="form-group">
              <label className="block font-medium mb-2">Does your conflict involve an amount higher than €175?</label>
              <div className="flex space-x-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="amountConflict"
                    id="yes"
                    value="Yes"

                  />
                  <label className="form-check-label" htmlFor="yes">
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="amountConflict"
                    id="no"
                    value="No"
                  />
                  <label className="form-check-label" htmlFor="no">
                    No
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="amountConflict"
                    id="unknown"
                    value="Don't know / Not applicable"
                  />
                  <label className="form-check-label" htmlFor="unknown">
                    Don't know / Not applicable
                  </label>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="caseType" className="block font-medium mb-2">What is your case about?</label>
              <select
                className="block w-full border border-gray-300 rounded p-2"
                id="caseType"
                name="caseType"
                required
              >
                <option value="">-- Make your choice --</option>
                <option value="collisionDamage">Collision Damage</option>
                <option value="massDamage">Mass Damage</option>
                <option value="business">Business</option>
              </select>
            </div>

            <div className="form-group">
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Next &rarr;
              </button>
              <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded ml-2">
                Finish later
              </button>
            </div>
          </form>
        </section>

        <footer className="mt-4 text-center">
          <p>
            Made by{' '}
            <Link href="https://www.digilize.com/">
            <div className="text-blue-600">
              Digilize Agency
            </div>
            </Link>
          </p>
        </footer>
      </div>
    </>
  );
};

export default Page;
