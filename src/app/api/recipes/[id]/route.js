import { db } from "../../../../db/db";
import { recipes } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(request, response) {
  const id = response.params.id * 1;
  try {
    let recipe = await db.select().from(recipes).where(eq(recipes.id, id));
    if (recipe.length == 0) {
      return Response.json(
        {
          message: "No recipes found in that id",
        },
        { status: 404 }
      );
    }
    return Response.json(
      {
        message: "Data fetched successfully",
        recipe,
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      {
        message: error.message,
      },
      { status: 500 }
    );
  }
}
export async function DELETE(request, response) {
  const id = response.params.id * 1;
  try {
    await db.select(recipes).where(eq(recipes.id, id));
    return Response.json(
      {
        message: "Data deleted successfully",
      },
      { status: "200" }
    );
  } catch (error) {
    return Response.json(
      {
        message: error.message,
      },
      { status: 500 }
    );
  }
}
