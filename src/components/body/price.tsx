import styled from "styled-components";

const plans = [
  {
    name: "Basic",
    price: "$15",
    duration: "3 month",
    features: ["HD Quality", "1 Device", "Limited Content", "Ads Supported"],
  },
  {
    name: "Continue",
    price: "$20",
    duration: "6 month",
    features: ["Full HD", "2 Devices", "Most Content", "No Ads"],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "$36",
    duration: "10 month",
    features: ["4K Ultra HD", "4 Devices", "All Content", "No Ads + Priority"],
  },
];

export const Price = () => {
  return (
    <Section id="pricing">
      <div className="px-6 mb-8 text-center">
        <h2 className="text-white text-3xl font-bold">Price</h2>
        <p className="text-gray-400 mt-2">Choose the plan that fits your needs</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 px-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`plan-card ${plan.highlighted ? "highlighted" : ""}`}
          >
            {plan.highlighted && (
              <div className="popular-badge">MOST POPULAR</div>
            )}
            <h3 className="plan-name">{plan.name}</h3>
            <p className="plan-price">{plan.price}</p>
            <p className="plan-duration">{plan.duration}</p>
            <ul className="plan-features">
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <button className="plan-button">Choose Plan</button>
          </div>
        ))}
      </div>
    </Section>
  );
};

const Section = styled.section`
  background-color: #000;
  padding: 40px 24px;

  .plan-card {
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 20px;
    padding: 28px 24px;
    width: 280px;
    text-align: center;
    position: relative;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-6px);
      border-color: #374151;
    }

    &.highlighted {
      background: linear-gradient(180deg, #1f2937 0%, #111827 100%);
      border-color: #dc2626;
      transform: scale(1.05);
    }
  }

  .popular-badge {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: #dc2626;
    color: #fff;
    font-size: 11px;
    font-weight: bold;
    padding: 4px 12px;
    border-radius: 20px;
    letter-spacing: 0.5px;
  }

  .plan-name {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    margin: 8px 0 12px;
  }

  .plan-price {
    color: #fff;
    font-size: 42px;
    font-weight: bold;
    margin: 0;
  }

  .plan-duration {
    color: #9ca3af;
    font-size: 14px;
    margin: 0 0 20px;
  }

  .plan-features {
    list-style: none;
    padding: 0;
    margin: 0 0 24px;
    text-align: left;

    li {
      color: #d1d5db;
      font-size: 14px;
      padding: 8px 0;
      border-bottom: 1px solid #1f2937;

      &:last-child {
        border-bottom: none;
      }

      &::before {
        content: "✓ ";
        color: #dc2626;
        font-weight: bold;
      }
    }
  }

  .plan-button {
    width: 100%;
    padding: 12px;
    border-radius: 10px;
    border: none;
    background: #dc2626;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: #b91c1c;
    }
  }
`;
