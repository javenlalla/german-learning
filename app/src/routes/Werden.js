import React from 'react';

const Werden = () => {
  return (<>
    <div className="page-title">
      <div className="row">
        <div className="col-12 col-md-6 order-md-1 order-last">
          <h3>Werden</h3>
        </div>
      </div>
    </div>

    <section className="section">
      <div className="row" id="basic-table">
        <div className="col-12">
          <div className="card">
            {/* <div className="card-header">
              <h4 className="card-title"></h4>
            </div> */}
            <div className="card-content">
              <div className="card-body">
                <p className="card-text">Werden
                </p>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Weil</th>
                        <th>Deshalb</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Ich musste zu meiner Frau nach Hause, <span className="fw-bold">weil</span> sie krank <span className="fst-italic">ist</span>.</td>
                        <td>Meine Frau ist krank, <span className="fw-bold">deshalb</span> <span className="fst-italic">musste</span> ich zu ihr nach Hause.</td>

                      </tr>
                      <tr>
                        <td>Ich gehe heute nicht zu dem Konzert, <span className="fw-bold">weil</span> ich keine Lust <span className="fst-italic">habe</span>.</td>
                        <td>Ich habe keine Lust, <span className="fw-bold">deshalb</span> <span className="fst-italic">gehe</span> ich heute nicht zu dem Konzert.</td>

                      </tr>
                      <tr>
                        <td>Sie arbeitet heute nicht, <span className="fw-bold">weil</span> sie krank <span className="fst-italic">ist</span>.</td>
                        <td>Sie ist krank, <span className="fw-bold">deshalb</span> <span className="fst-italic">arbeitet</span> sie heute nicht.</td>

                      </tr>
                      <tr>
                        <td>Ich kann heute nicht zu dir kommen, <span className="fw-bold">weil</span> ich keine Zeit <span className="fst-italic">habe</span>.</td>
                        <td>Ich habe keine Zeit, <span className="fw-bold">deshalb</span> <span className="fst-italic">kann</span> ich heute nicht zu dir kommen.</td>

                      </tr>
                      <tr>
                        <td>Ich bin müde, <span className="fw-bold">weil</span> ich nicht gut <span className="fst-italic">schlafe</span>.</td>
                        <td>Ich schlafe nicht gut, <span className="fw-bold">deshalb</span> <span className="fst-italic">bin</span> ich müde.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default Werden;