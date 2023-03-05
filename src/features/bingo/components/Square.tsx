import React, { FC, useState } from "react";
import * as z from "zod";
import styles from "./Square.module.scss";
import Image from "next/image";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const squareSchema = z.object({
  label: z.string(),
  imageURL: z.string().optional(),
});

type SquareProps = z.infer<typeof squareSchema>;

const Square: FC<SquareProps> = (props) => {
  const { label, imageURL = "" } = props;

  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={styles["container"]} onClick={() => setOpen(true)}>
        {imageURL && (
          <Image
            width={120}
            height={120}
            src={imageURL}
            alt={label}
            unoptimized
          />
        )}

        <div className={styles["label"]}>{label}</div>
      </div>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{label}</DialogTitle>
        <DialogContent className={styles["dialog-content"]}>
          <Image width={120} height={120} src={imageURL} alt={""} unoptimized />
          <DialogContentText>この生き物は〜〜〜〜</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>閉じる</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Square;
