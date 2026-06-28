export function LocalDataNotice() {
  return (
    <section className="rounded-2xl border border-blue-900 bg-blue-950/30 p-5">
      <h3 className="text-xl font-black text-blue-200">Mode prototype local</h3>
      <p className="large-readable mt-2 text-blue-100">Les ajouts sont sauvegardes dans ce navigateur avec localStorage. Supabase sera branche ensuite pour multi-utilisateurs reel.</p>
    </section>
  );
}
