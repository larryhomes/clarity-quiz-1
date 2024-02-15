import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HelpCircle } from "lucide-react";
// Importazioni non utilizzate come Github, Youtube, Link e Image sono state rimosse
// Se avrai bisogno di utilizzarli in futuro, puoi decommentarli

type Props = {};

const DetailsDialog = (props: Props) => {
  return (
    <Dialog>
      <DialogTrigger>
        <span className="flex items-center px-2 py-1 text-white rounded-md bg-slate-800">
        Cosa è Clarity?
          <HelpCircle className="w-5 h-5 ml-1" />
        </span>
      </DialogTrigger>
      <DialogContent className="w-[70vw] max-w-[100vw] md:w-[50vw]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Benvenuto su Clarity!</DialogTitle>
          <DialogDescription>
            <p className="my-2 mt-4">
            Sei stanco dei quiz banali e ripetitivi? Dì addio all'ordinario e abbraccia lo straordinario con Clarity! La nostra piattaforma sta rivoluzionando l'esperienza di quiz e trivia sfruttando l'immenso potenziale dell'intelligenza artificiale.
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DetailsDialog;
