"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MedicinePost } from "@/types/routes.type";

type Props = {
  item: MedicinePost;
};

export default function MedicineCards({ item }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="rounded-2xl shadow-md hover:shadow-xl transition duration-300">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl font-semibold">{item.name}</CardTitle>
            <Badge variant="secondary">{item.categoryName}</Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-3">
          <div className="text-sm space-y-1">
            <p>
              <span className="font-medium">Price : </span> ${item.price} <span className="font-medium"> / unit </span>
            </p>
            <p>
              <span className="font-medium">Stock : </span> {item.stock}
            </p>
            <p>
              <span className="font-medium">Total Orders : </span> {item.orders.length}
            </p>
          </div>

          <Button className="w-full rounded-xl">View Details</Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
