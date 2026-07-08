import { COLORS } from "@/src/constants/colors";
import { FastDropScreen } from "@/src/data/screens";
import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

type Props = {
  screen: FastDropScreen;
};

export function ScreenPlaceholder({ screen }: Props) {
  return (
    <ScrollView style={styles.root} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        {screen.badge ? <Text style={styles.badge}>{screen.badge}</Text> : null}
        <Text style={styles.title}>{screen.title}</Text>
        <Text style={styles.subtitle}>{screen.subtitle}</Text>
        <Text style={styles.description}>{screen.description}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Elementos del Figma</Text>
        {screen.items.map((item) => (
          <View key={item} style={styles.itemRow}>
            <View style={styles.dot} />
            <Text style={styles.itemText}>{item}</Text>
          </View>
        ))}
      </View>

      {screen.actions?.length ? (
        <View style={styles.actions}>
          {screen.actions.map((action) => (
            <Pressable
              key={action.href}
              style={styles.button}
              onPress={() => router.push(action.href as never)}
            >
              <Text style={styles.buttonText}>{action.label}</Text>
            </Pressable>
          ))}
        </View>
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: 20,
    paddingTop: 72,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 24,
  },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: COLORS.mutedSurface,
    color: COLORS.primary,
    fontSize: 13,
    fontWeight: "700",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    marginBottom: 16,
  },
  title: {
    color: COLORS.text,
    fontSize: 32,
    fontWeight: "800",
    marginBottom: 8,
  },
  subtitle: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
  },
  description: {
    color: COLORS.secondaryText,
    fontSize: 15,
    lineHeight: 22,
  },
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: 24,
    padding: 18,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 24,
  },
  cardTitle: {
    color: COLORS.text,
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 14,
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 12,
  },
  dot: {
    width: 9,
    height: 9,
    borderRadius: 99,
    backgroundColor: COLORS.primary,
  },
  itemText: {
    color: COLORS.text,
    fontSize: 15,
    flex: 1,
  },
  actions: {
    gap: 12,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    paddingHorizontal: 18,
    borderRadius: 18,
    alignItems: "center",
  },
  buttonText: {
    color: COLORS.surface,
    fontSize: 16,
    fontWeight: "800",
  },
});
