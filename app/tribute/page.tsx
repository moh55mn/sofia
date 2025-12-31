import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Tribute() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/sofia2.jpg')" }}
      />
      <div className="absolute inset-0 bg-background/75" />

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center justify-center px-6 py-12">
        <Card className="w-full max-w-xl">
          <CardHeader>
            <CardTitle className="text-2xl">Tribute</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              <Button asChild>
                <a
                  href="https://throne.com/servesofia"
                  target="_blank"
                  rel="noreferrer"
                >
                  Throne
                </a>
              </Button>

              <Button variant="secondary" asChild>
                <a
                  href="https://youpay.me/servesofia"
                  target="_blank"
                  rel="noreferrer"
                >
                  YouPay
                </a>
              </Button>

              <Button variant="outline" asChild>
                <a
                  href="https://www.loyalfans.com/servesofia_"
                  target="_blank"
                  rel="noreferrer"
                >
                  LoyalFans
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
