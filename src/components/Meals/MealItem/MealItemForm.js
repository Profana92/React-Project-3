import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

function MealItemForm(props) {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "5",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
}

export default MealItemForm;
