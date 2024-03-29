import React from "react"

import "./signup.css"

const EN_FORM_ID = "2262749"
const FA_FORM_ID = "2273768"

class Signup extends React.Component {
  render() {
    let form,
      { langKey } = this.props
    switch (langKey) {
      case "fa":
        form = {
          id: FA_FORM_ID,
          title: "عضویت در خبرنامه",
          subTitle: "آخرین مطالب دیتانرد رو با ایمیل دریافت کنید.",
          buttonText: "تایید",
          buttonColor: "rgb(55, 0, 179)",
          subText:
            "هیچ اسپمی دریافت نخواهید کرد. هر لحظه بخواید می‌تونید عضویتتون رو لغو کنید.",
        }
        break
      default:
        form = {
          id: EN_FORM_ID,
          title: "Join the Newsletter",
          subTitle: "Subscribe to get datanerd's latest content by email.",
          buttonText: "Subscribe",
          buttonColor: "rgb(55, 0, 179)",
          subText: "I won't send you spam. Unsubscribe at any time.",
        }
    }
    return (
      <form
        action={`https://app.convertkit.com/forms/${form.id}/subscriptions`}
        style={{ backgroundColor: "rgb(249, 250, 251)", borderRadius: 4 }}
        className="seva-form formkit-form"
        method="post"
        data-sv-form={form.id}
        data-uid="de1eed4248"
        data-format="inline"
        data-version={5}
        data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
        min-width="400 500 600 700 800"
      >
        <div style={{ opacity: "0.2" }} className="formkit-background" />
        <div data-style="minimal">
          <div
            className="formkit-header"
            style={{ color: "rgb(77, 77, 77)", fontSize: 27, fontWeight: 700 }}
            data-element="header"
          >
            <h2>{form.title}</h2>
          </div>
          <div
            className="formkit-subheader"
            style={{ color: "rgb(104, 104, 104)", fontSize: 18 }}
            data-element="subheader"
          >
            <p>{form.subTitle}</p>
          </div>
          <ul
            className="formkit-alert formkit-alert-error"
            data-element="errors"
            data-group="alert"
          />
          <div
            data-element="fields"
            data-stacked="true"
            className="seva-fields formkit-fields"
          >
            <div className="formkit-field">
              <input
                className="formkit-input"
                aria-label="Name"
                style={{
                  color: "rgb(0, 0, 0)",
                  borderColor: "rgb(227, 227, 227)",
                  borderRadius: 4,
                  fontWeight: 400,
                }}
                name="fields[first_name]"
                placeholder="Name"
                type="text"
              />
            </div>
            <div className="formkit-field">
              <input
                className="formkit-input"
                name="email_address"
                style={{
                  color: "rgb(0, 0, 0)",
                  borderColor: "rgb(227, 227, 227)",
                  borderRadius: 4,
                  fontWeight: 400,
                }}
                aria-label="Email Address"
                placeholder="Email Address"
                required
                type="email"
              />
            </div>
            <button
              data-element="submit"
              className="formkit-submit formkit-submit"
              style={{
                color: "rgb(255, 255, 255)",
                backgroundColor: form.buttonColor,
                borderRadius: 4,
                fontWeight: 700,
              }}
            >
              <div className="formkit-spinner">
                <div />
                <div />
                <div />
              </div>
              <span className>{form.buttonText}</span>
            </button>
          </div>
          <div
            className="formkit-guarantee"
            style={{ color: "rgb(77, 77, 77)", fontSize: 13, fontWeight: 400 }}
            data-element="guarantee"
          >
            <p>{form.subText}</p>
          </div>
        </div>
      </form>
    )
  }
}

export default Signup
