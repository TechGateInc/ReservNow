import "./quickReplies.css";
import { NextPage } from "next";

interface QuickRepliesProps {}

const QuickReplies: NextPage<QuickRepliesProps> = () => {
  return (
    <div className="quick-replies-root">
      <div className="quick-replies-header">
        <div className="quick-replies-title">Manage quick replies</div>
        <div className="quick-replies-sub-title">
          Create, edit, or delete message templates.
        </div>
      </div>
      <div className="quick-replies-content">
        <div className="row">
          <div className="title">Name</div>
          <div className="content">Name</div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default QuickReplies;
