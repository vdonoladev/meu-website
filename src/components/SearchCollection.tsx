import type { CollectionEntry } from "astro:content";
import { createEffect, createSignal, For, onMount, Show } from "solid-js";
import Fuse from "fuse.js";
import ArrowCard from "@components/ArrowCard";
import { cn } from "@lib/utils";
import SearchBar from "@components/SearchBar";

type Props = {
  entry_name: string;
  tags: string[];
  data: CollectionEntry<"blog">[] | CollectionEntry<"projects">[];
};

const BLOG_TRAILS: { id: string; label: string; matchTags: string[] }[] = [
  { id: "all", label: "Tudo", matchTags: [] },
  {
    id: "tech",
    label: "Tech & Linux",
    matchTags: [
      "linux",
      "terminal",
      "tecnologia",
      "programação",
      "código",
      "desenvolvimento",
    ],
  },
  {
    id: "productivity",
    label: "Produtividade & Estudos",
    matchTags: [
      "produtividade",
      "disciplina",
      "estudos",
      "desenvolvimento pessoal",
      "rotina",
      "hábitos",
      "concentração",
      "cpa-20",
    ],
  },
  {
    id: "faith",
    label: "Espiritualidade & Reflexão",
    matchTags: [
      "espiritualidade",
      "catolicismo",
      "reflexão",
      "oração",
      "filosofia",
      "temperamentos",
    ],
  },
];

export default function SearchCollection({ entry_name, data, tags }: Props) {
  const coerced = data.map((entry) => entry as CollectionEntry<"blog">);

  const [query, setQuery] = createSignal("");
  const [filter, setFilter] = createSignal(new Set<string>());
  const [activeTrail, setActiveTrail] = createSignal("all");
  const [collection, setCollection] = createSignal<CollectionEntry<"blog">[]>(
    [],
  );
  const [descending, setDescending] = createSignal(true);

  const fuse = new Fuse(coerced, {
    keys: ["slug", "data.title", "data.summary", "data.tags"],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.4,
  });

  createEffect(() => {
    const trail = BLOG_TRAILS.find((t) => t.id === activeTrail());

    const filtered = (
      query().length < 2
        ? coerced
        : fuse.search(query()).map((result) => result.item)
    )
      .filter((entry) => {
        if (!trail || trail.id === "all") return true;
        return entry.data.tags.some((tag: string) =>
          trail.matchTags.includes(tag.toLowerCase()),
        );
      })
      .filter((entry) =>
        Array.from(filter()).every((value) =>
          entry.data.tags.some(
            (tag: string) => tag.toLowerCase() === String(value).toLowerCase(),
          ),
        ),
      );
    setCollection(descending() ? filtered : filtered.toReversed());
  });

  function toggleDescending() {
    setDescending(!descending());
  }

  function toggleTag(tag: string) {
    setFilter(
      (prev) =>
        new Set(
          prev.has(tag) ? [...prev].filter((t) => t !== tag) : [...prev, tag],
        ),
    );
  }

  function clearFilters() {
    setFilter(new Set<string>());
    setActiveTrail("all");
  }

  const onSearchInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setQuery(target.value);
  };

  onMount(() => {
    const wrapper = document.getElementById("search-collection-wrapper");
    if (wrapper) {
      wrapper.style.minHeight = "unset";
    }
  });

  return (
    <div class="space-y-6">
      {/* Trilhas rápidas para o Blog */}
      <Show when={entry_name === "posts"}>
        <div class="flex flex-wrap gap-2 pb-2 border-b border-black/10 dark:border-white/15">
          <For each={BLOG_TRAILS}>
            {(trail) => (
              <button
                onClick={() => setActiveTrail(trail.id)}
                class={cn(
                  "px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide transition-colors duration-200",
                  activeTrail() === trail.id
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "bg-black/5 dark:bg-white/10 text-black/70 dark:text-white/70 hover:bg-black/10 dark:hover:bg-white/20",
                )}
              >
                {trail.label}
              </button>
            )}
          </For>
        </div>
      </Show>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Painel de Controle */}
        <div class="col-span-3 sm:col-span-1">
          <div class="sticky top-24 mt-2">
            {/* Barra de Busca */}
            <SearchBar
              onSearchInput={onSearchInput}
              query={query}
              setQuery={setQuery}
              placeholderText={`Buscar ${entry_name}`}
            />
            {/* Filtros por Tag */}
            <div class="relative flex flex-row justify-between w-full">
              <p class="text-sm font-semibold uppercase my-4 text-black dark:text-white">
                Tags
              </p>
              {(filter().size > 0 || activeTrail() !== "all") && (
                <button
                  onClick={clearFilters}
                  aria-label="Limpar filtros"
                  class="absolute flex justify-center items-center h-full w-10 right-0 top-0 stroke-neutral-400 dark:stroke-neutral-500 hover:stroke-neutral-600 hover:dark:stroke-neutral-300"
                >
                  <svg class="size-5">
                    <use href={`/ui.svg#x`} />
                  </svg>
                </button>
              )}
            </div>
            <ul class="flex flex-wrap sm:flex-col gap-1.5">
              <For each={tags}>
                {(tag) => (
                  <li class="sm:w-full">
                    <button
                      onClick={() => toggleTag(tag)}
                      class={cn(
                        "w-full px-2 py-1 rounded",
                        "flex gap-2 items-center",
                        "bg-black/5 dark:bg-white/10",
                        "hover:bg-black/10 hover:dark:bg-white/15",
                        "transition-colors duration-300 ease-in-out",
                        filter().has(tag) && "text-black dark:text-white",
                      )}
                    >
                      <svg
                        class={cn(
                          "shrink-0 size-5 fill-black/50 dark:fill-white/50",
                          "transition-colors duration-300 ease-in-out",
                          filter().has(tag) && "fill-black dark:fill-white",
                        )}
                      >
                        <use
                          href={`/ui.svg#square`}
                          class={cn(!filter().has(tag) ? "block" : "hidden")}
                        />
                        <use
                          href={`/ui.svg#square-check`}
                          class={cn(filter().has(tag) ? "block" : "hidden")}
                        />
                      </svg>

                      <span class="truncate block min-w-0 pt-[2px]">{tag}</span>
                    </button>
                  </li>
                )}
              </For>
            </ul>
          </div>
        </div>
        {/* Itens */}
        <div class="col-span-3 sm:col-span-2">
          <div class="flex flex-col">
            {/* Barra de Informações */}
            <div class="flex justify-between flex-row mb-2">
              <div class="text-sm uppercase">
                MOSTRANDO {collection().length} DE {data.length} {entry_name}
              </div>
              <button
                onClick={toggleDescending}
                class="flex flex-row gap-1 stroke-neutral-400 dark:stroke-neutral-500 hover:stroke-neutral-600 hover:dark:stroke-neutral-300 text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 hover:dark:text-neutral-300"
              >
                <div class="text-sm uppercase">
                  {descending() ? "MAIS RECENTES" : "MAIS ANTIGOS"}
                </div>
                <svg class="size-5 left-2 top-[0.45rem]">
                  <use
                    href={`/ui.svg#sort-descending`}
                    class={descending() ? "block" : "hidden"}
                  ></use>
                  <use
                    href={`/ui.svg#sort-ascending`}
                    class={descending() ? "hidden" : "block"}
                  ></use>
                </svg>
              </button>
            </div>
            <ul class="flex flex-col gap-3">
              {collection().map((entry) => (
                <li>
                  <ArrowCard entry={entry} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
