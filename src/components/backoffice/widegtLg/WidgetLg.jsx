import React from "react";
import "./widgetLg.css";
import faker from "faker";
export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src={faker.image.avatar()}
              className="widgetLgImg"
              alt="user avatar"
            />
            <span className="widgetLgName"> {faker.name.firstName()}</span>
          </td>

          <td className="widgetLgDate"> 2nd {faker.date.month()} 2021</td>
          <td className="widgetLgAmount">€ {faker.finance.amount()}</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src={faker.image.avatar()}
              className="widgetLgImg"
              alt="user avatar"
            />
            <span className="widgetLgName"> {faker.name.firstName()}</span>
          </td>

          <td className="widgetLgDate"> 5th {faker.date.month()} 2021</td>
          <td className="widgetLgAmount">€ {faker.finance.amount()}</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src={faker.image.avatar()}
              className="widgetLgImg"
              alt="user avatar"
            />
            <span className="widgetLgName"> {faker.name.firstName()}</span>
          </td>

          <td className="widgetLgDate"> 20nd {faker.date.month()} 2021</td>
          <td className="widgetLgAmount">€ {faker.finance.amount()}</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src={faker.image.avatar()}
              className="widgetLgImg"
              alt="user avatar"
            />
            <span className="widgetLgName"> {faker.name.firstName()}</span>
          </td>

          <td className="widgetLgDate"> 4th {faker.date.month()} 2021</td>
          <td className="widgetLgAmount">€ {faker.finance.amount()}</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src={faker.image.avatar()}
              className="widgetLgImg"
              alt="user avatar"
            />
            <span className="widgetLgName"> {faker.name.firstName()}</span>
          </td>

          <td className="widgetLgDate"> 13th {faker.date.month()} 2021</td>
          <td className="widgetLgAmount">€ {faker.finance.amount()}</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src={faker.image.avatar()}
              className="widgetLgImg"
              alt="user avatar"
            />
            <span className="widgetLgName"> {faker.name.firstName()}</span>
          </td>

          <td className="widgetLgDate"> 12th {faker.date.month()} 2021</td>
          <td className="widgetLgAmount">€ {faker.finance.amount()}</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src={faker.image.avatar()}
              className="widgetLgImg"
              alt="user avatar"
            />
            <span className="widgetLgName"> {faker.name.firstName()}</span>
          </td>

          <td className="widgetLgDate"> 15th {faker.date.month()} 2021</td>
          <td className="widgetLgAmount">€ {faker.finance.amount()}</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src={faker.image.avatar()}
              className="widgetLgImg"
              alt="user avatar"
            />
            <span className="widgetLgName"> {faker.name.firstName()}</span>
          </td>

          <td className="widgetLgDate"> 27th {faker.date.month()} 2021</td>
          <td className="widgetLgAmount">€ {faker.finance.amount()}</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
      </table>
    </div>
  );
}
