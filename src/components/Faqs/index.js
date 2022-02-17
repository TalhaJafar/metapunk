import React from "react";

export default function Faqs() {
  return (
    <div id="main">
      <div className="container">
        <div className="accordion" id="faq">
          <div className="card">
            <div className="card-header" id="faqhead1">
              <a
                href="#"
                className="btn btn-header-link"
                data-toggle="collapse"
                data-target="#faq1"
                aria-expanded="true"
                aria-controls="faq1"
              >
                S.S.S
              </a>
            </div>

            <div
              id="faq1"
              className="collapse show"
              aria-labelledby="faqhead1"
              data-parent="#faq"
            >
              <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
