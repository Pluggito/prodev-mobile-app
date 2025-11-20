import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },

  // SEARCH SECTION
  searchGroup: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 15,
    elevation: 2,
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  searchControl: {
    marginTop: 4,
    paddingVertical: 6,
    fontSize: 14,
  },
  searchButton: {
    width: 45,
    height: 45,
    backgroundColor: "#FF385C",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },

  // FILTER SCROLL
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  filterContainer: {
    width: 70,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 8,
    elevation: 2,
  },

  // LISTING SECTION
  listingContainer: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 8,
  },

  // PAGINATION SECTION
  paginationContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  showMoreButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 30,
    backgroundColor: "#FF385C",
  },
  showMoreButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
