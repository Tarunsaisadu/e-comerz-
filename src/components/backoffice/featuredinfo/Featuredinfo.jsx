import "./featuredinfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

const Featuredinfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneycontainer">
          <span className="featuredMoney"> € 3,678 </span>
          <span className="featuredMoneyrate">
            -9.2 <ArrowDownward className="featuredIcons negative" />
          </span>
        </div>

        <span className="featuredSub">since last year</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneycontainer">
          <span className="featuredMoney"> € 5,678 </span>
          <span className="featuredMoneyrate">
            -3.2 <ArrowDownward className="featuredIcons negative" />
          </span>
        </div>
        <span className="featuredSub">Since last year</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneycontainer">
          <span className="featuredMoney"> € 2,678 </span>
          <span className="featuredMoneyrate">
            +2.2 <ArrowUpward className="featuredIcons" />
          </span>
        </div>
        <span className="featuredSub">Since last year</span>
      </div>
    </div>
  );
};

export default Featuredinfo;
